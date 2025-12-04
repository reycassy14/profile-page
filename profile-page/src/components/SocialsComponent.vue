<template>
    <div class="social relative flex flex-col justify-center items-center px-[30px] w-full">
        <div class="rounded-[20px] w-full">
            <div class="flex flex-row items-center justify-center gap-3 h-auto bg-gray-900 w-full py-5 rounded-[20px]">
                    <p class="label text-[24px] font-semibold">Social</p>
                    <div class="divider border-l border-gray-500 h-6"></div>
                    <div v-for="(item, index) in socialsApps" :key="index" class="social-wrapper">
                        <span class="apps-item p-4 bg-black rounded-[15px] inline-block leading-none cursor-pointer">
                            {{ item.social }}
                        </span>
                    </div>
                </div>
        </div>
    </div>

</template>

<script>
export default{
    name: 'DetailsComponent',

    data(){
        return{
            socialsApps: [
                {
                    social: 'instagram',
                    link: '/'
                },
                {
                    social: 'Facebook',
                    link: '/'
                },
                {
                    social: 'X',
                    link: '/'
                }
            ]
        }
    }
}
</script>

<style>
</style>