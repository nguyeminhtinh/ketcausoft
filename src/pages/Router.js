import React, { lazy, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
const Thanks = lazy(() => import('./Thanks'));
const UserForm = lazy(() => import('./UserForm'));
const UserForm2 = lazy(() => import('./UserForm2'));
const Step1 = lazy(() => import('./Step1'));
const Step2 = lazy(() => import('./Step2'));
const Step3 = lazy(() => import('./Step3'));
const Step4 = lazy(() => import('./Step4'));
const Step5 = lazy(() => import('./Step5'));
const Step6 = lazy(() => import('./Step6'));
const Step7 = lazy(() => import('./Step7'));
const Step8 = lazy(() => import('./Step8'));
const Step9 = lazy(() => import('./Step9'));
const Step10 = lazy(() => import('./Step10'));
const Step11 = lazy(() => import('./Step11'));

const Router = () => {
    const { listen } = useHistory();
    useEffect(() => {
        const unlisten = listen((location) => {
            if (!window.gtag) return;
            window.gtag('config', 'GTM-TC9KTLT', {
                page_path: location.pathname,
            });
        });
        return unlisten;
    }, [listen]);

    return (
        <Switch>
            <Route path='/user-form'>
                <UserForm />
            </Route>
            <Route path='/user-form-2'>
                <UserForm2 />
            </Route>
            <Route path='/step-1'>
                <Step1 />
            </Route>
            <Route path='/step-2'>
                <Step2 />
            </Route>
            <Route path='/step-3'>
                <Step3 />
            </Route>
            <Route path='/step-4'>
                <Step4 />
            </Route>
            <Route path='/step-5'>
                <Step5 />
            </Route>
            <Route path='/step-6'>
                <Step6 />
            </Route>
            <Route path='/step-7'>
                <Step7 />
            </Route>
            <Route path='/step-8'>
                <Step8 />
            </Route>
            <Route path='/step-9'>
                <Step9 />
            </Route>
            <Route path='/step-10'>
                <Step10 />
            </Route>
            <Route path='/step-11'>
                <Step11 />
            </Route>
            <Route path='/'>
                <Thanks />
            </Route>
        </Switch>
    );
};

export default Router;