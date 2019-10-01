<template>
    <button class="g-button" :class="{[`icon-${position}`]:true}" @click="$emit('click')">
        <g-icon  class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        props:{
            icon:{},
            loading:{
                type:Boolean,
                default:false
            },
            position:{
                type:String,
                default:'left',
                validator: function (value) {
                    return value === 'left' || value === 'right';
                }
            }
        }
    }
</script>

<style lang="scss">
    @keyframes spin {
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }
    .g-button {font-size: var(--font-size);height: var(--button-height);padding: 0 1em;border-radius: var(--button-radius);border: 1px solid var(--border-color);background: var(--button-bg);display: inline-flex;justify-content: center;align-items: center;vertical-align: top;
        &:hover {border-color: var(--border-color-hover);}
        &:active {background-color: var(--button-active-bg);}
        &:focus {outline: none;}
        >.icon{order: 1; margin:  0 0.3em 0 0;}
        >.content{order:2;}

        &.icon-right{
            >.icon{order:2;margin:  0 0 0 0.3em;}
            >.content{order: 1;}
        }
        .loading{animation: spin 0.7s infinite linear}
    }
</style>