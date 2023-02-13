// https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn?file=/src/index.tsx:207-521
// https://react-hook-form.com/api/usefieldarray/

// Multiple 
// https://codesandbox.io/s/react-hook-form-multiple-usefieldarray-in-a-form-ffboe


import { useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import './dynamicForm.scss';
const DynamicForm = () => {

	const [json, setJson] = useState('')

	const { register, control, handleSubmit, } = useForm({
		defaultValues: {
			extras: [{ title: "Spicy", price: 5 }],
			products: [{ title: "Pizza", price: 5 }],
		}
	});

	const { fields: productsFields, append: productsAppend, remove: productsRemove, } = useFieldArray({
		control, name: "products"
	});
	const { fields, append, remove, } = useFieldArray({
		control, name: "extras"
	});

	const onSubmit = (data) => {
		debugger;
		console.log("data", data);
		setJson(JSON.stringify(data))
	}

	return (
		<div className='dynamicForm'>

			<h1> DynamicForm </h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset>
					<label htmlFor="">Name</label>
					<input {...register('name')} type="text" />
				</fieldset>
				<fieldset>
					<label htmlFor="">Email</label>
					<input {...register('email')} type="text" />
				</fieldset>

				{/* XXXXXXXXXXXXX */}
				<section>
					<h3>Products</h3>
					<ul>
						{productsFields.map((item, index) => {
							return (
								<li key={item.id}>
									<input type="text"
										{...register(`products.${index}.title`, { required: true })}
									/>
									<Controller
										render={({ field }) => <input {...field} type="number" />}
										name={`products.${index}.price`}
										control={control}
									/>
									<span>
										<button type="button" onClick={() => productsRemove(index)}>
											Delete
										</button>
									</span>
								</li>
							);
						})}
					</ul>
					<span>
						<button type="button" onClick={() => {
							productsAppend({ title: "", price: 1 });
						}}>append</button>
					</span>
				</section>

				{/* XXXXXXXXXXXXX */}
				<section>
					<h3>Extras</h3>
					<ul>
						{fields.map((item, index) => {
							return (
								<li key={item.id}>
									<input type="text"
										{...register(`extras.${index}.title`, { required: true })}
									/>
									<Controller
										render={({ field }) => <input {...field} type="number" />}
										name={`extras.${index}.price`}
										control={control}
									/>
									<span>
										<button type="button" onClick={() => remove(index)}>
											Delete
										</button>
									</span>
								</li>
							);
						})}
					</ul>
					<section>
						<button type="button" onClick={() => {
							append({ title: "", price: 13 });
						}}>append</button>
					</section>
				</section>


				{/* SUBMIT */}
				<div className='btn'>
					<input type="submit" />
				</div>
			</form>


			<section>
				{json}
			</section>

		</div>
	)
}
export default DynamicForm;