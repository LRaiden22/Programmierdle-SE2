<script>
        import "../app.css";
        import logo from '$lib/img/logo.png';
</script>

<nav class="bg-background p-4 rounded-lg text-white shadow-md">
    <div class="container mx-auto">
        <div class="flex items-center justify-between">
            <div class="space-x-4 flex items-center">
                <img src={logo} alt="Logo" class="h-16 w-auto mr-4"/>
                <a href="/" class="text-lg font-semibold text-text px-3 py-2 rounded-lg hover:bg-neutral-900">Home</a>
                <a href="/about" class="text-lg font-semibold text-text px-3 py-2 rounded-lg hover:bg-neutral-900">About</a>
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