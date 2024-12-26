
<template>
<div>
    <Navbar/>
    <slot></slot>
    <Footer />
</div>
</template>
<script>
import Footer from './Footer.vue';
import Navbar from './Navbar.vue';

export default {
    name: "MasterLayout",
     components :{
         Footer , 
         Navbar
     }
}
</script>