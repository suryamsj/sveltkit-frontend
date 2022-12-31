<script>
    import "bootstrap/dist/css/bootstrap.min.css";
    import "$lib/asset/main.css";
    import Nav from "../lib/components/Nav.svelte";
</script>

<svelte:head>
    <title>SvelteCI</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
    />
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
    />
</svelte:head>

<!-- Start Navbar -->
<Nav />
<!-- End Navbar -->

<!-- Start Main -->
<main class="flex-shrink-0">
    <slot />
</main>
<!-- End Main -->
