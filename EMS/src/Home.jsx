import { Title, Image, Text } from "@mantine/core";
function Home() {
  return (
    <div className="">
      <Image radius="md" src="./../public/Perago.jpg" />
      <Title order={1}>Perago systems</Title>
      <Title order={2}>Employee management system</Title>
      <Text>
        An Employee Management System in a company, like the one we use, is a
        super useful tool for handling things related to employees. It's like a
        hub where we can easily add new employees, remove old ones, and update
        everyone's information. From the time someone joins the company to
        assigning them different roles and making updates as needed, the system
        makes sure everything runs smoothly. Everyone can use it – not just the
        HR folks but also managers and regular employees. The system is designed
        to be simple, so HR people can quickly add or remove employees, change
        details, and assign roles, making the company more flexible. There's
        also a cool feature that shows the company's structure, so everyone can
        see who's in charge and how the team is set up. Whether it's a small
        business or a big one, the system works for everyone. Small companies
        can use it to organize HR stuff, and bigger ones can manage lots of
        different roles and employees easily. Overall, it helps the company run
        better, follow rules, and gives everyone a smoother work experience,
        making teamwork and progress easier.
      </Text>
    </div>
  );
}

export default Home;
