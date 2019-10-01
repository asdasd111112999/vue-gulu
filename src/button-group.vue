<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "button-group",
        mounted() {
            for(let node of this.$el.children){
                let name = node.nodeName.toLocaleLowerCase()
                if(name !== 'button'){
                    console.warn(`g-button-group中只能写g-button，但你写了${name}`)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .g-button-group{display: inline-flex;vertical-align: middle;
    >.g-button{border-radius: 0;margin-left: -1px;
        &:first-child{border-radius:4px 0 0 4px;margin-left: 0; }
        &:last-child{border-radius:0 4px 4px 0; }
        &:hover{position: relative;z-index: 1;}
    }}
</style>