<script>
    import { page } from "$app/stores";

    console.log($page);
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
        <a class="navbar-brand" href="/">SVELTKITCI</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
                <a
                    class="nav-link"
                    class:active={$page.url.pathname === "/user" ||
                        $page.url.pathname === "/user/add" ||
                        $page.url.pathname ===
                            "/user/edit/" + $page.params.uuid}
                    aria-current="page"
                    href="/user">User</a
                >
            </div>
        </div>
    </div>
</nav>
