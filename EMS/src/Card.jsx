import { Collapse, Text } from '@mantine/core';

const Card = (data) => {
    return (
      <Collapse>
        {data.map((item) => (
          <div key={item.id}>
            <Text>{item.name}</Text>
            {item.children?.length > 0 && <Card data={item.children} />}
          </div>
        ))}
      </Collapse>
    );
  };
  export default Card