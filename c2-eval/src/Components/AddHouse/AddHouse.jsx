import { useForm } from "react-hook-form";
export const AddHouse = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>name</label>
        <input type="text" className="name" {...register("name")} required />
        <br />
        <label>ownerName</label>
        <input
          {...register("ownerName")}
          type="text"
          className="ownerName"
          required
        />
        <br />
        <label>address</label>
        <input
          {...register("address")}
          type="text"
          className="address"
          required
        />
        <br />
        <label>areaCode</label>
        <input
          {...register("areaCode")}
          type="text"
          className="areaCode"
          required
        />
        <br />
        <label>rent</label>
        <input {...register("rent")} type="text" className="rent" required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input {...register("bachelor")} type="checkbox" className="bachelor" />
        <br />
        <label>married</label>
        <input {...register("married")} type="checkbox" className="married" />
        <br />
        <label>image</label>
        <input {...register("image")} type="text" className="image" required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
