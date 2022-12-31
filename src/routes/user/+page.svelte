<script>
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { user as store } from "$lib/store/user";
    import Card from "$lib/components/Card.svelte";
    import Section from "$lib/components/Section.svelte";
    import Swal from "sweetalert2";
    import axios from "axios";

    onMount(async () => {
        $store = await getUser();
    });

    // Get User
    const getUser = async () => {
        try {
            const response = await axios.get(
                `http://localhost/svelte-php/user`
            );
            return await response.data;
        } catch (err) {
            console.log(err);
        }
    };

    // Delete User
    const deleteUser = async (id) => {
        try {
            const response = await axios.delete(
                `http://localhost/svelte-php/user/${id}`
            );

            if (response.status === 200) {
                Swal.fire({
                    title: "Success",
                    text: response.data.message,
                    icon: "success",
                });
            }
            $store = await getUser();
        } catch (error) {
            console.log(error);
        }
    };

    // Confirm Delete
    function confirmDelete(id) {
        Swal.fire({
            title: "Are you sure you want to delete this data??",
            text: "Deleted data will no longer appear",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteUser(id);
            }
        });
    }
</script>

<div
    in:fly={{ y: -50, duration: 450, delay: 550 }}
    out:fly={{ y: -50, duration: 450 }}
>
    <Section>
        <div class="row">
            <div class="col-lg-12 col-md-12 col-12">
                <Card>
                    <svelte:fragment slot="header">
                        Data User
                        <a
                            href="/user/add"
                            class="btn btn-primary btn-sm float-end"
                            ><i class="bi bi-person-plus-fill" /> New user</a
                        >
                    </svelte:fragment>
                    <div class="table-responsive">
                        <table class="table table-bordered table-hovered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {#each $store as item, index}
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.phone_number}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <a
                                                class="btn btn-primary btn-sm"
                                                href="/user/edit/{item.uuid}"
                                                ><i
                                                    class="bi bi-pencil-fill"
                                                /></a
                                            >
                                            <button
                                                class="btn btn-danger btn-sm"
                                                on:click={() =>
                                                    confirmDelete(item.uuid)}
                                                ><i
                                                    class="bi bi-trash-fill"
                                                /></button
                                            >
                                        </td>
                                    </tr>
                                {:else}
                                    <tr>
                                        <td colspan="5" class="text-center"
                                            >Not Found</td
                                        >
                                    </tr>
                                {/each}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </div>
    </Section>
</div>
