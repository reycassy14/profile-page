<template>
    <div class="min-h-screen bg-background text-foreground">
        <!-- Navbar area with muted background -->
        <nav class="bg-muted/30 border-b border-border p-4">
            <div class="container mx-auto">
                <h2 class="text-lg font-semibold text-foreground">Navigation (bg-muted)</h2>
            </div>
        </nav>

        <!-- Main content area -->
        <main class="container mx-auto p-8">
            <!-- Demo cards showing different background colors -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <!-- Default background -->
                <div class="bg-background border border-border rounded-lg p-6">
                    <h3 class="text-xl font-bold mb-2">bg-background</h3>
                    <p class="text-muted-foreground">Main page background (slate theme)</p>
                </div>

                <!-- Card background -->
                <div class="bg-card border border-border rounded-lg p-6 shadow-sm">
                    <h3 class="text-xl font-bold mb-2 text-card-foreground">bg-card</h3>
                    <p class="text-muted-foreground">Elevated card surfaces</p>
                </div>

                <!-- Muted background -->
                <div class="bg-muted border border-border rounded-lg p-6">
                    <h3 class="text-xl font-bold mb-2 text-muted-foreground">bg-muted</h3>
                    <p class="text-muted-foreground">Subtle, less prominent areas</p>
                </div>

                <!-- Accent background -->
                <div class="bg-accent border border-border rounded-lg p-6">
                    <h3 class="text-xl font-bold mb-2 text-accent-foreground">bg-accent</h3>
                    <p class="text-muted-foreground">Highlighted sections</p>
                </div>

                <!-- Primary background -->
                <div class="bg-primary text-primary-foreground rounded-lg p-6">
                    <h3 class="text-xl font-bold mb-2">bg-primary</h3>
                    <p class="opacity-90">Primary brand color</p>
                </div>

                <!-- Secondary background -->
                <div class="bg-secondary text-secondary-foreground rounded-lg p-6">
                    <h3 class="text-xl font-bold mb-2">bg-secondary</h3>
                    <p class="opacity-90">Secondary brand color</p>
                </div>
            </div>

            <!-- Your actual page content renders here -->
            <div class="bg-card border border-border rounded-lg p-6">
                <router-view></router-view>
            </div>
        </main>

        <!-- Footer area -->
        <footer class="bg-muted/50 border-t border-border mt-12 py-6">
            <div class="container mx-auto text-center">
                <p class="text-muted-foreground">Footer with muted background</p>
            </div>
        </footer>
    </div>
</template>

<script>
// import NavbarComponent from '../components/NavbarComponent.vue';
// import FooterComponent from '@/components/FooterComponent.vue';
export default {
components: {
  // NavbarComponent,
  // FooterComponent
},
data() {

},

};
</script>

<style scoped></style>
