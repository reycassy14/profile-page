<template>
    <div class="font-plus-jakarta min-h-screen w-full">
        <div v-if="$route.query.type ==='shadcn-demo'" class="container mx-auto px-4">
            <ShadcnDemo />
        </div>
        <div v-else class="container mx-auto px-4 py-8 lg:max-w-[1080px] bg-black rounded-[20px] w-full">
            <HeaderComponent />
            <SocialsComponent />
        </div>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import ShadcnDemo from './ShadcnDemo.vue';
import SocialsComponent from '@/components/SocialsComponent.vue';

export default{
    name: 'MainPage',
    components: {
        ShadcnDemo,
        HeaderComponent,
        SocialsComponent
    },
    
    data(){
        return{

        }
    }
}
</script>

<style scoped></style>