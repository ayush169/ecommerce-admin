interface DashboardParams {
  params: {
    storeId: string;
  };
}
const DashboarPage = ({ params: { storeId } }: DashboardParams) => {
  return (
    <div>
      <h1>This is a dashboard page</h1>
      <p>{storeId}</p>
    </div>
  );
};

export default DashboarPage;
