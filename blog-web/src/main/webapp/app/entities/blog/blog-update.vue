<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" >
                <h2 id="blogApp.blog.home.createOrEditLabel">Create or edit a Blog</h2>
                <div>
                    <div class="form-group" v-if="blog.id">
                        <label for="id">ID</label>
                        <input type="text" class="form-control" id="id" name="id"
                               v-model="blog.id" readonly />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="blog-name">Name</label>
                        <input type="text" class="form-control" name="name" id="blog-name"
                            :class="{'valid': !$v.blog.name.$invalid, 'invalid': $v.blog.name.$invalid }" v-model="$v.blog.name.$model"  required/>
                        <div v-if="$v.blog.name.$anyDirty && $v.blog.name.$invalid">
                            <small class="form-text text-danger" v-if="!$v.blog.name.required">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.blog.name.minLength" >
                                This field is required to be at least 3 characters.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="blog-handle">Handle</label>
                        <input type="text" class="form-control" name="handle" id="blog-handle"
                            :class="{'valid': !$v.blog.handle.$invalid, 'invalid': $v.blog.handle.$invalid }" v-model="$v.blog.handle.$model"  required/>
                        <div v-if="$v.blog.handle.$anyDirty && $v.blog.handle.$invalid">
                            <small class="form-text text-danger" v-if="!$v.blog.handle.required">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.blog.handle.minLength" >
                                This field is required to be at least 2 characters.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="blog-description">Description</label>
                        <input type="text" class="form-control" name="description" id="blog-description"
                            :class="{'valid': !$v.blog.description.$invalid, 'invalid': $v.blog.description.$invalid }" v-model="$v.blog.description.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label"  for="blog-user">User</label>
                        <select class="form-control" id="blog-user" name="user" v-model="blog.user">
                            <option v-bind:value="null"></option>
                            <option v-bind:value="blog.user && userOption.id === blog.user.id ? blog.user : userOption" v-for="userOption in users" :key="userOption.id">{{userOption.login}}</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span>Cancel</span>
                    </button>
                    <button type="submit" id="save-entity" :disabled="$v.blog.$invalid || isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span>Save</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" src="./blog-update.component.ts">
</script>
