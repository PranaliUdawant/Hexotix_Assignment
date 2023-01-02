import React, { useEffect } from 'react'
import * as yup from "yup"
import { useFormik } from 'formik'
import { useDispatch, useSelector } from "react-redux"
import { UserLogin } from '../redux/actions/UserActions'
import { useNavigate } from "react-router-dom"
export default function Login() {
    const { userlogin, error } = useSelector(state => state.RegisterUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: "john@gmail.com",
            password: "12345"
        },
        validationSchema: yup.object({
            email: yup.string().required(),
            password: yup.string().required()
        }),
        onSubmit: (values) => {
            dispatch(UserLogin(values))
        }
    })
    useEffect(() => {
        userlogin ? navigate("/dashboard") : null
    }, [userlogin])

    return <>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    {
                        error && <div className="alert alert-danger">
                            Please check email or password
                        </div>
                    }
                    <div class="card">
                        <div class="card-header">Login</div>
                        <div class="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div>

                                    <label for="email" class="form-label">Email</label>
                                    <input
                                        type="text"
                                        id="email" name="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} value={formik.values.email}
                                        className={formik.errors.email && formik.touched.email ? "form-control is-invalid" : "form-control"}
                                        placeholder="Enter Your Email"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div class="mt-2">
                                    <label for="password" class="form-label">Password</label>
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="password" name="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} value={formik.values.password}
                                        className={formik.errors.password && formik.touched.password ? "form-control is-invalid" : "form-control"}
                                        placeholder="Enter Your Password"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <button type="submit" class="btn btn-dark w-100 mt-3">
                                    Login
                                </button>
                                <p class="text-center mt-3">
                                    Dont Have Account? <a href="#">Create Account</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
