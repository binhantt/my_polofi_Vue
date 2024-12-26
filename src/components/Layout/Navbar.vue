<template>
    <div class="has-text-white  ">
        <div class="py-3 px-4	 has-background-danger	is-flex is-justify-content-space-between is-align-items-center	">
            <div class="is-flex  is-align-items-center is-size-6 has-text-weight-bold " style="gap: 0.5rem;">
                <figure class="image is-48x48">
                    <img src="https://i.ibb.co/nLJJp8t/Screenshot-2024-12-26-190833-removebg-preview.png" />
                </figure>
                <div>
                    <p> HÀ PHương 縁  </p>
                </div>
            </div>
            <div class="is-flex is-capitalized has-text-weight-bold	is-flex has-text-white " style="gap: 2.5rem;">
                <a v-for="(ele, index ) in ItemNabar" :key="index" class="has-text-decoration-none has-text-white"
                    :href="ele.path" style="text-decoration: none !important;"> {{ ele.name }}</a>
            </div>
            <a class="button  is-danger is-inverted is-rounded">Ngôn Ngữ đã học </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Navbar',
    data() {
        return {
            ItemNabar: [
                {
                    "name": "Giới thiệu",
                    "path": "/",
                },
                {
                    "name": "Chức chỉ",
                    "path": "/",
                },
                {
                    "name": "Dịch Thuật",
                    "path": "/",
                }
            ]
        }
    }
}
</script>