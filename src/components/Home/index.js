import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'

import PerformanceByAge from '../PerformanceByAge'
import PerformanceByGender from '../PerformanceByGender'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    vaccinationData: {performanceByAge: {age: 55, count: 100}},
  }

  componentDidMount() {
    this.getPerformanceData()
  }

  getPerformanceData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const performanceDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(performanceDataApiUrl)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = {
        last7DaysVaccination: fetchedData.last_7_days_vaccination.map(
          eachDayData => ({
            vaccineDate: eachDayData.vaccine_date,
            dose1: eachDayData.dose_1,
            dose2: eachDayData.dose_2,
          }),
        ),
        vaccinationByAge: fetchedData.vaccination_by_age.map(range => ({
          age: range.age,
          count: range.count,
        })),
        vaccinationByGender: fetchedData.vaccination_by_gender.map(
          genderType => ({
            gender: genderType.gender,
            count: genderType.count,
          }),
        ),
      }
      this.setState({
        vaccinationData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderFailureView = () => (
    <div className="failure-view">
      <img
        className="failure-image"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1 className="failure-text">Something went wrong</h1>
    </div>
  )

  renderPerformanceStats = () => {
    const {vaccinationData} = this.state

    return (
      <>
        <div className="performance-container">
          <PerformanceByGender
            performanceByGenderDetails={vaccinationData.vaccinationByGender}
          />
          <PerformanceByAge
            performanceByAgeDetails={vaccinationData.vaccinationByAge}
          />
        </div>
      </>
    )
  }

  renderLoadingView = () => (
    <div className="loading-view" data-testId="loader">
      <Loader color="#ffffff" height={80} type="ThreeDots" width={80} />
    </div>
  )

  renderViewsBasedOnAPIStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderPerformanceStats()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="app-container">
        <div className="performance-dashboard-container">
          <Header />
          <div className="board-container">
            <div className="board-side-container">
              <h1 className="board-heading">DASH BOARD</h1>
              <hr />
            </div>
            {this.renderViewsBasedOnAPIStatus()}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
