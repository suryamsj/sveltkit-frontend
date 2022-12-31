<script>
    import { fly } from "svelte/transition";
    import { goto } from "$app/navigation";
    import { enhance } from "$app/forms";
    import Card from "$lib/components/Card.svelte";
    import Section from "$lib/components/Section.svelte";
    import Swal from "sweetalert2";
</script>

<div
    in:fly={{ y: -50, duration: 450, delay: 550 }}
    out:fly={{ y: -50, duration: 450 }}
>
    <Section>
        <div class="row">
            <div class="col-lg-12 col-md-12 col-12">
                <Card>
                    <svelte:fragment slot="header">Add new user</svelte:fragment
                    >
                    <form
                        method="post"
                        use:enhance={() => {
                            return async ({ result }) => {
                                if (result.type === "success") {
                                    Swal.fire({
                                        title: "Success",
                                        text: result.data.message,
                                        icon: "success",
                                    }).then(() => {
                                        goto("/user");
                                    });
                                }
                                if (result.type === "failure") {
                                    Swal.fire({
                                        title: "Warning",
                                        text: "Please complete the data first!",
                                        icon: "warning",
                                    });
                                }
                                if (result.type === "error") {
                                    Swal.fire({
                                        title: "Error",
                                        text: result.error.message,
                                        icon: "error",
                                    });
                                }
                            };
                        }}
                    >
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                class="form-control"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                class="form-control"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="phone_number" class="form-label"
                                >Phone Number</label
                            >
                            <input
                                type="text"
                                name="phone_number"
                                id="phone_number"
                                class="form-control"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label"
                                >Password</label
                            >
                            <input
                                type="password"
                                name="password"
                                id="password"
                                class="form-control"
                            />
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary w-100"
                                >Send</button
                            >
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    </Section>
</div>
