<template>
    <div class="bg-slate-900">
        <div class="bg-gray-900">
            <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
                <section data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"
                    class="bg-opacity-30 m-10 py-10 sm:py-16 lg:py-24">
                    <section class="py-10 bg-gray-900 sm:py-16 lg:py-24">
                        <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                            <div class="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
                                <div class="flex flex-col justify-between lg:py-5">
                                    <div>
                                        <h2
                                            class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-5xl">
                                            Get in touch with us for any enquiry
                                        </h2>
                                        <p class="max-w-xl text-xs mx-auto mt-4  leading-relaxed text-white">
                                            Why not speak to the industry expects who have all the experience
                                        </p>

                                        <img class="relative z-10 max-w-xs mx-auto -mb-16 md:hidden"
                                            src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line-mobile.svg"
                                            alt="" />

                                        <img class="hidden w-full translate-x-24 translate-y-8 md:block"
                                            src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line.svg"
                                            alt="" />
                                    </div>

                                    <div class="hidden md:mt-auto md:block"></div>
                                </div>

                                <div class="lg:pl-12">
                                    <div class="overflow-hidden bg-white rounded-md">
                                        <div class="p-6 sm:p-10">
                                            <h3 class="text-3xl font-semibold text-black">
                                                Send us a message
                                            </h3>
                                            <p class="mt-4 text-base text-gray-600">
                                                For any product you want or any enquiry send a message
                                            </p>

                                            <form @submit="handleSubmit" class="mt-4">
                                                <div class="space-y-6">
                                                    <div>
                                                        <label for="" class="text-base font-medium text-gray-900">
                                                            Your name
                                                        </label>
                                                        <div class="mt-2.5 relative">
                                                            <input type="text" required="required" v-model="name" name=""
                                                                id="" placeholder="Enter your full name"
                                                                class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500" />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label for="" class="text-base font-medium text-gray-900">
                                                            Email address
                                                        </label>
                                                        <div class="mt-2.5 relative">
                                                            <input type="text" required="required" v-model="email" name=""
                                                                id="" placeholder="Enter your full Email"
                                                                class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500" />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label for="" class="text-base font-medium text-gray-900">
                                                            Send message
                                                        </label>
                                                        <div class="mt-2.5 relative">
                                                            <textarea name="" id="" v-model="message"
                                                                placeholder="Send message"
                                                                class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                                                                rows="4"></textarea>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <button onclick="showMessage()" type="submit"
                                                            class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-md focus:outline-none hover:bg-orange-600 focus:bg-orange-600">
                                                            Send message
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div class="md:hidden"></div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    </div>
    <!-- End Hero -->
</template>

<script>

export default {
    name: "ContactForm",
    data() {
        return {
            name: "",
            email: "",
            message: "",


        };
    },
    methods: {
        async handleSubmit() {
            const data = {
                name: this.name,
                email: this.email,
                message: this.message,

            };

            alert('Message has been submitted');

        }
    },
};
</script>

<style lang="scss" scoped></style>


