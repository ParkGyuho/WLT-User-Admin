<template>
  <div>
    NAME: <input type="text"><br>
    Phone Number: <input type="tel"><br>
    Department: 

    <v-container fluid>
        <v-row align="center">
            <v-col
                class="d-flex"
                cols="6"
                sm="3"
            >
                <v-select
                :items="departments"
                label="Outlined style"
                outlined
                ></v-select>
            </v-col>
        </v-row>
    </v-container>

    E-mail:<input type="email"><br>
    Role: 
    <v-container fluid>
        <v-row align="center">
            <v-col
                class="d-flex"
                cols="6"
                sm="3"
            >
                <v-select
                :items="roles"
                label="Outlined style"
                outlined
                ></v-select>
            </v-col>
        </v-row>
    </v-container>
    Image: 
    <input @change="upload" multiple accept="image/*" type="file" id="file" class="inputfile" />


    
  </div>
  
</template>

<script>
export default {
    data: () => ({
      departments: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      roles: ['master', 'manager', 'labeler'],
    }),
}
</script>

<style>



</style>