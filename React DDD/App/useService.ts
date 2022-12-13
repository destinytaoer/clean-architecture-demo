export function useSomeService() {
  const [form] = useForm();
  const request = useRequest();
  const model = useModel();
  useEffect(() => {
    form.onFieldsChange = () => {
      request.run(form.getFieldsValue);
    };
  }, [form]);
  return {
    model,
    form,
  };
}

// 使用
// function SomeComponent() {
//   const someService = useService();
//   return <div>{someService.state}</div>;
// }
