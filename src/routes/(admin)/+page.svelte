<script lang="ts">
import { whoami } from '$lib/matrix/requests';
import { onMount } from 'svelte';

let {
    data
}: {
    data: any
} = $props();

$effect(() => {
    if(data) {
        console.log(data)
    }
})


onMount(() => {
    checkAuth();
})

async function checkAuth() {
    if(!data?.session?.access_token) {
        return
    }
    const user = await whoami(data.session.access_token);
    if (user) {
        console.log(user)
    }
}

</script>

admin
