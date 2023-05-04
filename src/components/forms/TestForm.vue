<template>
    <div>
        <FormulateForm v-model="formData">
    <div v-for="(field, index) in formFields" :key="index">
      <FormulateInput
        v-if="field.type === 'text'"
        v-model="formData[field.name]"
        :type="field.type"
        :label="field.label"
      />
      <FormulateSelect
        v-if="field.type === 'select'"
        v-model="formData[field.name]"
        :label="field.label"
        :options="field.options"
      />
      <!-- Add more field types as needed -->

      <button @click="removeFormField(index)">Remove</button>
    </div>

    <button @click="addFormField">Add Field</button>
    <button type="submit">Submit</button>
  </FormulateForm>
  <form>
      <label for="field-type">Field Type:</label>
      <select id="field-type" v-model="selectedFieldType">
        <option value="text">Text Field</option>
        <option value="textarea">Textarea</option>
        <option value="checkbox">Checkbox</option>
        <option value="radio">Radio Buttons</option>
        <option value="select">Select</option>
      </select>

      <label for="field-label">Label:</label>
      <input id="field-label" v-model="fieldLabel" type="text">

      <button type="button" @click="addField">Add Field</button>
    </form>

    <div v-for="(field, index) in formFields" :key="index">
      <label :for="'field-' + index">{{ field.label }}</label>

      <template v-if="field.type === 'text'">
        <input :id="'field-' + index" type="text">
      </template>

      <template v-if="field.type === 'textarea'">
        <textarea :id="'field-' + index"></textarea>
      </template>

      <template v-if="field.type === 'checkbox'">
        <input :id="'field-' + index" type="checkbox">
      </template>

      <template v-if="field.type === 'radio'">
        <input :id="'field-' + index + '-1'" type="radio" name="field">
        <label :for="'field-' + index + '-1'">Option 1</label>

        <input :id="'field-' + index + '-2'" type="radio" name="field">
        <label :for="'field-' + index + '-2'">Option 2</label>
      </template>

      <template v-if="field.type === 'select'">
        <select :id="'field-' + index">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </template>

      <button type="button" @click="removeField(index)">Remove Field</button>
    </div>
  </div>
  </template>
  

<script>
import VueFormulate from '@braid/vue-formulate'
export default {
    components:{
        VueFormulate
    },
  data() {
    return {
      formData: {},
      formSchema:  [
        {
          type: 'password',
          name: 'password',
          label: 'Enter a new password',
          validation: 'required'
        },
        {
          type: 'password',
          name: 'password_confirm',
          label: 'Confirm your password',
          validation: '^required|confirm:password',
          validationName: 'Password confirmation'
        },
        {
          type: 'submit',
          label: 'Change password'
        }
      ],
      formFields: [
      { type: 'text', label: 'First Name', name: 'firstName' },
      { type: 'text', label: 'Last Name', name: 'lastName' },
      // Add more field objects as needed
    ],
    };
  },
  methods: {
    addField() {
      if (this.selectedFieldType && this.fieldLabel) {
        this.formFields.push({
          type: this.selectedFieldType,
          label: this.fieldLabel
        });
        this.selectedFieldType = '';
        this.fieldLabel = '';
      }
    },
    removeField(index) {
      this.formFields.splice(index, 1);
    },
    addFormField() {
      const newField = {
        name: `field${this.formFields.length + 1}`,
        type: 'text',
        label: 'Field Label',
        options: [],
      };
      this.formFields.push(newField);
    },
    removeFormField(index) {
      this.formFields.splice(index, 1);
      delete this.formData[`field${index + 1}`];
    },
    handleSubmit() {
      // Handle form submission logic
    },
  },
};
</script>

<style>

</style>