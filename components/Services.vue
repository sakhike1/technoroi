<template>
    <div class="bg-slate-900">
        <div class="bg-gray-900">
            <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
                <section data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"
                    class=" bg-opacity-30 m-10 py-10 sm:py-16 lg:py-24">
                    <section>
                        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                                <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                                    <img alt="Party" src="~/assets/robot-hand-finger-ai-background-technology-graphics.jpg"
                                        class="absolute inset-0 h-full w-full object-cover" />
                                </div>

                                <div class="lg:py-24">
                                    <h2 class="text-3xl text-white font-bold sm:text-4xl">Technoroi's </h2>

                                    <p class="mt-4  text-gray-500">
                                        Commitment to excellence has established us as a trusted provider of
                                        top-notch products and services in our field.
                                    </p>

                                    <router-link to="Contact"> <a href="#_"
                                            class="relative px-5 inline-flex items-center justify-center p-4 mt-6 px-9 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-gray-600 rounded-full shadow-md group">
                                            <span
                                                class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full  group-hover:translate-x-0 ease">
                                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                                </svg>
                                            </span>
                                            <span
                                                class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Contact
                                                us

                                            </span>
                                            <span class="relative invisible">Contact us</span>
                                        </a>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>