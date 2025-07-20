import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Explore" styles="mt-4" size="large" shape="rounded-full" />

      <Button
        title="Learn More"
        styles="bg-green-500"
        size="medium"
        shape="rounded-md"
      />
    </div>
  );
};
export default Landing;
