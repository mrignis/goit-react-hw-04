import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import clsx from "clsx";
import axios from "axios"; // Імпортуємо Axios

import styles from "./SearchBar.module.css";

const instance = axios.create({
  baseURL: "https://dummyjson.com",
});

const requestProductsByQuery = async (query = "") => {
  const { data } = await instance.get(`/products/search?q=${query}`);
  return data;
};

const SearchBar = ({ onSubmit }) => {
  const validationSchema = Yup.object().shape({
    query: Yup.string().required("Please enter a search query"),
  });

  const formik = useFormik({
    initialValues: {
      query: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const data = await requestProductsByQuery(values.query);
        onSubmit(data);
        formik.resetForm();
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch data. Please try again later.");
      }
    },
  });

  return (
    <header className={styles.header}>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={clsx(styles.input, {
            [styles.error]: formik.touched.query && formik.errors.query,
          })}
          {...formik.getFieldProps("query")}
        />
        {formik.touched.query && formik.errors.query && (
          <div className={styles.errorMessage}>{formik.errors.query}</div>
        )}
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
