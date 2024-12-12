export default function useGreeting(text: string) {
  const { $client } = useNuxtApp();
  return $client.hello.useQuery({ text });
}
