<script>
    import { fly } from "svelte/transition";
</script>

<div
    in:fly={{ y: -50, duration: 450, delay: 550 }}
    out:fly={{ y: -50, duration: 450 }}
>
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-12">
                    <h1><span>SVELTKIT-CI</span>CRUD</h1>
                    <p>The CRUD exercise uses Svelte's own built-in API.</p>
                </div>
            </div>
        </div>
    </header>
</div>
