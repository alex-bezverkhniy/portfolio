<template>
    <div>
        <h2 id="page-heading">
            <span id="tag-heading">Tags</span>
            <router-link :to="{name: 'TagCreate'}" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-tag">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span >
                    Create new Tag
                </span>
            </router-link>
        </h2>
        <b-alert :show="dismissCountDown"
            dismissible
            :variant="alertType"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged">
            {{alertMessage}}
        </b-alert>
        <br/>
        <div class="alert alert-warning" v-if="!isFetching && tags && tags.length === 0">
            <span>No tags found</span>
        </div>
        <div class="table-responsive" v-if="tags && tags.length > 0">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th v-on:click="changeOrder('id')"><span>ID</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('name')"><span>Name</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="tag of orderBy(tags, propOrder, reverse === true ? 1 : -1)"
                    :key="tag.id">
                    <td>
                        <router-link :to="{name: 'TagView', params: {tagId: tag.id}}">{{tag.id}}</router-link>
                    </td>
                    <td>{{tag.name}}</td>
                    <td class="text-right">
                        <div class="btn-group flex-btn-group-container">
                            <router-link :to="{name: 'TagView', params: {tagId: tag.id}}" tag="button" class="btn btn-info btn-sm details">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline">View</span>
                            </router-link>
                            <router-link :to="{name: 'TagEdit', params: {tagId: tag.id}}"  tag="button" class="btn btn-primary btn-sm edit">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(tag)"
                                   variant="danger"
                                   class="btn btn-sm"
                                   v-b-modal.removeEntity>
                                <font-awesome-icon icon="times"></font-awesome-icon>
                                <span class="d-none d-md-inline">Delete</span>
                            </b-button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <b-modal ref="removeEntity" id="removeEntity" >
            <span slot="modal-title"><span id="blogApp.tag.delete.question">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-tag-heading" >Are you sure you want to delete this Tag?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-tag" v-on:click="removeTag()">Delete</button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts" src="./tag.component.ts">
</script>
