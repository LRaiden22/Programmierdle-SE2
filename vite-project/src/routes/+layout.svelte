<script>
        import "../app.css";
</script>

<nav class="bg-background p-4 rounded-lg text-white shadow-md">
    <div class="container mx-auto px-4">
        <div class="flex items-center justify-between">
            <div>
                <a href="/" class="text-lg font-semibold text-text p-2 rounded-lg hover:bg-primary">Home</a>
            </div>
            <div class="space-x-4">
                <a href="/about" class="text-lg font-semibold text-text p-2 rounded-lg hover:bg-primary">About</a>
            </div>
        </div>
    </div>
</nav>

<slot></slot>

<style>
        @import 'tailwindcss/base';
        @import 'tailwindcss/components';
        @import 'tailwindcss/utilities';
</style>