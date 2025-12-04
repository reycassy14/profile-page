<template>
    <div class="font-plus-jakarta min-h-screen w-full">
        <nav class="bg-muted/30 border-b border-border p-4">
            <div class="container mx-auto flex justify-between items-center">
                <h2 class="text-lg font-semibold text-foreground">Profile Page</h2>
                <div class="acc-details flex flex-row items-center gap-x-4">
                    <p class="username">hmqt</p>
                    <Button class="logout cursor-pointer" variant="outline" aria-label="Submit">Logout</Button>
                </div>
            </div>
        </nav>
        <div v-if="$route.query.type ==='shadcn-demo'" class="container mx-auto px-4">
            <ShadcnDemo />
        </div>
        <div v-else class="container mx-auto px-4 py-8 lg:max-w-[1080px] bg-black rounded-[20px]">
            <HeaderComponent />
            <SocialsComponent />
        </div>
    </div>
</template>

<script lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import ShadcnDemo from './ShadcnDemo.vue';
import SocialsComponent from '@/components/SocialsComponent.vue';
import { Button } from '@/components/ui/button'

export default{
    name: 'MainPage',
    components: {
        ShadcnDemo,
        HeaderComponent,
        SocialsComponent,
        Button
    },
    
    data(){
        return{

        }
    }
}
</script>

<style scoped></style>