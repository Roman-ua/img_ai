import Header from "../../sharedComponents/Header/Header.tsx";
import List from "./components/List.tsx";
import MainLayout from "../../sharedComponents/MainLayout/MainLayout.tsx";
import {useEffect} from "react";
import getPostsList from "../../store/asyncThunks/lystThunk.ts";
import {useAppDispatch, useAppSelector} from "../../sharedHooks/commonHooks.ts";

const ListPage = () => {
  const dispatch = useAppDispatch()
  const { list} = useAppSelector((state) => state.listReducer);

  useEffect(() => {
    dispatch(getPostsList());
  }, []);

  return (
    <MainLayout >
      <Header />
      <List list={list} />
    </MainLayout>
  )
}

export default ListPage
