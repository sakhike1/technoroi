<template>
    <div class="bg-slate-900">
        <div class="bg-gray-900">
            <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
                <section data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"
                    class=" bg-opacity-30 m-10 py-10 sm:py-16 lg:py-24">
                    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                            <div>
                                <img class="w-full rounded-md" src="~/assets/technology-g47ef7113b_1920.jpg" alt="" />
                            </div>

                            <div>

                                <h1 class="mt-4 text-3xl font-bold text-gray-300 lg:mt-8 sm:text-4xl xl:text-3xl">
                                    With a wide range of products from Greece and abroad we offer integrated
                                    solutions for
                                    businesses
                                </h1>
                                <p class="mt-4 text-xs text-gray-300 lg:mt-8 ">
                                    Our products are made to last
                                </p>

                                <router-link to="Services"> <a href="#_"
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
                                            class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Learn
                                            More
                                        </span>
                                        <span class="relative invisible">Learn More</span>
                                    </a>
                                </router-link>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    </div>
    <!-- End Hero -->
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
    mounted() {

        AOS.init({});
    },
};
</script>

<style lang="scss" scoped></style>


<!-- Hero -->
