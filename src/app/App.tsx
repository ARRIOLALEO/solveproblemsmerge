import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Paths} from 'src/modules/routes/paths';
import {PrivateRoute} from 'src/modules/routes/PrivateRoute';

import {RegisterCandidate} from './pages/RegisterCandidate';
import {
    Header,
    JobForm,
} from './components';
import {LoginPage} from './pages/LoginPage';
import {RegisterRecruiter} from './pages/RegisterRecruiter';
import {JobsPage} from './pages/JobsPage';
import {CandidatesPage} from './pages/CandidatesPage';

function App() {
    return (
        <>
            <Suspense fallback="loading">
                <div className="App">
                    <Header />
                </div>
            </Suspense>
            <Routes>
                <Route
                    path={Paths.LOGIN}
                    element={<LoginPage />}
                />
                <Route
                    path="/"
                    element={<PrivateRoute element={<RegisterRecruiter />} />}
                />
                <Route
                    path="/register-recruiter"
                    element={<PrivateRoute element={<RegisterRecruiter />} />}
                />
                <Route
                    path={Paths.JOBS}
                    element={<PrivateRoute element={<JobsPage />} />}
                />
                <Route
                    path={Paths.CANDIDATES}
                    element={<PrivateRoute element={<CandidatesPage />} />}
                />
                <Route
                    path="/register-candidate"
                    element={<PrivateRoute element={<RegisterCandidate />} />}
                />
                <Route
                    path="/create-job"
                    element={<PrivateRoute element={<JobForm />} />}
                />
            </Routes>
        </>
    );
}

export default App;
