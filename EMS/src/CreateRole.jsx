import { Input, Title, Fieldset, Button } from "@mantine/core";

function AddEmployee() {
  return (
    <div className="flex justify-center p-9">
      <form>
        <Title order={1}>Add new employee to our company</Title>
        <Fieldset legend="employee information">
          <div>
            <label htmlFor="name">Role Name</label>
            <Input name="name" />
          </div>
          <div>
            <label htmlFor="role">Parent Role</label>
            <Input name="role" />
          </div>
          <div className="flex justify-center p-1">
            <Button>Submit</Button>
          </div>
        </Fieldset>
      </form>
    </div>
  );
}

export default AddEmployee;
