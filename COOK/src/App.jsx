import { Route, Routes } from 'react-router-dom'
import BlogArticle from './components/Blog/BlogArticle'
import BlogCategory from './components/Blog/BlogCategory'
import SingleChatMob from './components/Chat/SingleChatMob'
import Members from './components/OnlineLesson/Members'
import Notes from './components/OnlineLesson/Notes'
import OnlineChat from './components/OnlineLesson/OnlineChat'
import SupportArticle from './components/Support/SupportArticle'
import SupportArticles from './components/Support/SupportArticles'
import SupportWrapper from "./components/Support/SupportWrapper"
import DashboardLayout from './layout/DashboardLayout'
import LandingLayoutWrapper from './layout/LandingLayoutWrapper'
import About from './pages/About'
import Blog from './pages/Blog'
import Chat from './pages/Chat'
import Copyright from './pages/Copyright'
import Error404 from './pages/Error404'
import GroupList from './pages/GroupList'
import GroupPage from './pages/GroupPage'
import LandingPage from './pages/LandingPage'
import OnlineLesson from './pages/OnlineLesson'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import StudentDashboard from './pages/StudentDashboard'
import Support from './pages/Support'
import TermsOfService from './pages/TermsOfService'
import TutorList from './pages/TutorList'

function App() {

  return (
    <div className='w-[calc(100vw - 100%)]'>
      <Routes>
        <Route path='/'>
          <Route path='signup' element={<Signup></Signup>}></Route>
          <Route path='signin' element={<Signin></Signin>}></Route>

          <Route path='/' element={<LandingLayoutWrapper></LandingLayoutWrapper>}>
            <Route index element={<LandingPage></LandingPage>}></Route>
            <Route path='search-tutors' element={<TutorList></TutorList>}></Route>
            <Route path='search-groups' element={<GroupList></GroupList>}></Route>
            <Route path='group-page' element={<GroupPage />} />
            <Route path='profile' element={<Profile></Profile>}></Route>
          </Route>

          <Route path='support' element={<SupportWrapper></SupportWrapper>}>
            <Route index element={<Support />} />
            <Route path=':category' element={<SupportArticles />} />
            <Route path='article' element={<SupportArticle />} />
          </Route>

          <Route path='online-lesson'>
            <Route element={<OnlineLesson></OnlineLesson>}>
              <Route index element={<OnlineChat></OnlineChat>}></Route>
              <Route path='notes' element={<Notes></Notes>}></Route>
              <Route path='members' element={<Members></Members>}></Route>
            </Route>
          </Route>

          <Route path='blog'>
            <Route index element={<Blog></Blog>}></Route>
            <Route path=':category' >
              <Route index element={<BlogCategory></BlogCategory>}></Route>
              <Route path='article' element={<BlogArticle></BlogArticle>}></Route>
            </Route>
          </Route>

          <Route path='student-dashboard' element={<DashboardLayout></DashboardLayout>}>
            <Route index element={<StudentDashboard />} />
            <Route path='chat' element={<Chat />} />
          </Route>

          <Route path='singleChat' element={<SingleChatMob />} />
          <Route path='about' element={<About />}></Route>
          <Route path='copyright' element={<Copyright />} />
          <Route path='terms-of-service' element={<TermsOfService />} />
        </Route>

        <Route path='*' element={<Error404></Error404>}></Route>
      </Routes>
    </div>
  )
}

export default App
