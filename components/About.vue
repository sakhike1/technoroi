<template>
    <section class="overflow-hidden bg-gray-900 sm:grid sm:grid-cols-2 sm:items-center">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"
                class="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">


                <p class="hidden text-xs text-gray-400 md:block">
                    Technoroi was founded in order to supply companies with materials for aboveground and
                    underground water networks, gas pipes and cable protection pipes.

                    With a wide range of products from Greece and abroad we offer inetergrated solutions for businesses,
                    with supreme quality materials and the most competitive prices in the market, in order to meet the needs
                    of Technical Public Sector companies as well as private constructions.

                    Our company employs skilled technical staff and is continually investing in infrastructure and
                    organization so as to become the Ideal Partner for your Technical Project. At our 6,500 m2 warehouse,
                    there is a full stock of materials and our private trucks make direct deliveries to construction sites,
                    in various agencies throughout Athens, as well as our extended client networks.


                </p>

                <div class="mt-4 md:mt-8">
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

        <img data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" alt="Violin" src="~/assets/figma.png"
            class="h-56 w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]" />
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>