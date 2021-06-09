<template>
    <div>
        <h1>Hello from results {{$route.params.id}}</h1>
    </div>
</template>
<script>
export default {
    middleware: 'post'
}
</script>