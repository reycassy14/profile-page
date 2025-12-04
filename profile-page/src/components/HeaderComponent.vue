<template>
    <div class="header flex flex-col justify-center items-center px-[30px]">
        <div class="header-wrapper grid grid-flow-col grid-rows-2 gap-[30px]">
            <div class="image row-span-3 w-full h-auto lg:h-[270px] rounded-[20px] mx-auto">
                <img :src="avatar" class="rounded-[20px] w-full h-full" alt="">
            </div>
            <div class="about col-span-2 w-full lg:w-[720px] bg-gray-900 p-5 rounded-[20px]">
                <p class="about text-[16px]">{{ userAbout.about }}</p>
            </div>
            <div class="interest col-span-2 row-span-2 rounded-[20px]">
            
                <div class="flex flex-row items-center justify-center gap-3 h-auto bg-gray-900 w-full lg:w-[720px] py-5 rounded-[20px]">
                    <p class="label text-[24px] font-semibold">Interests</p>
                    <div class="divider border-l border-gray-500 h-6"></div>
                    <div v-for="(item, index) in interestItems" :key="index" class="interest-wrapper">
                        <span class="interest-item p-4 bg-black rounded-[15px] inline-block leading-none cursor-pointer">
                            {{ item.title }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default{
    name: 'MainPage',

    data(){
        return{
            avatar: new URL('@/assets/hero.dev.png', import.meta.url).href,

            userAbout: {
                about: `A quiet, cool-headed software developer who thrives in the calm of late-night coding sessions. 
                        Naturally introverted, he finds comfort in clean code, minimal design, and the soft glow of a monitor. 
                        When not debugging systems, he’s deep into gaming worlds, appreciating pixel-perfect art and aesthetic details.
                         Fueled by iced americano, with a soft spot for both cats and dogs—because balance matters, even in chaos.`
            },

            interestItems: [
                {
                    title: '🎮Gaming'
                },
                {
                    title: '📖Marvel Comics'
                },
                {
                    title: '✈️Traveling'
                },
                {
                    title: '♟️Chess'
                },
            ]
        }
    }
}
</script>

<style>
</style>