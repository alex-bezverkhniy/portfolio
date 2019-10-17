<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" >
                <h2 id="blogApiApp.category.home.createOrEditLabel">Create or edit a Category</h2>
                <div>
                    <div class="form-group" v-if="category.id">
                        <label for="id">ID</label>
                        <input type="text" class="form-control" id="id" name="id"
                               v-model="category.id" readonly />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="category-name">Name</label>
                        <input type="text" class="form-control" name="name" id="category-name"
                            :class="{'valid': !$v.category.name.$invalid, 'invalid': $v.category.name.$invalid }" v-model="$v.category.name.$model"  required/>
                        <div v-if="$v.category.name.$anyDirty && $v.category.name.$invalid">
                            <small class="form-text text-danger" v-if="!$v.category.name.required">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.category.name.minLength" >
                                This field is required to be at least 2 characters.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="category-description">Description</label>
                        <input type="text" class="form-control" name="description" id="category-description"
                            :class="{'valid': !$v.category.description.$invalid, 'invalid': $v.category.description.$invalid }" v-model="$v.category.description.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label"  for="category-user">User</label>
                        <select class="form-control" id="category-user" name="user" v-model="category.user">
                            <option v-bind:value="null"></option>
                            <option v-bind:value="category.user && userOption.id === category.user.id ? category.user : userOption" v-for="userOption in users" :key="userOption.id">{{userOption.login}}</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span>Cancel</span>
                    </button>
                    <button type="submit" id="save-entity" :disabled="$v.category.$invalid || isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span>Save</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" src="./category-update.component.ts">
</script>
