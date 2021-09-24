import React from 'react'
import { PageLayout } from '../page-layout/PageLayout'
import Card from '../components/Card'
import PlusMenu from '../components/Menu'

const ExpensesDashboard = () => {
    return(
        <PageLayout title="Your Expenses" subtitle="Your expenses at your disaposal">
            <div
                style={{
                    width: 'auto',
                    height: 'auto',
                    display: "block",
                    marginLeft:"30px",
                    marginTop:"10px",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Card
                    icon='../Birthday.png'
                    title="Anniversary"
                    amount="-$125.40"
                    description1="Valerie. K    $18.54"
                    description2="Jean. D    $106.46"
                    />
                <Card
                    icon='../cash.png'
                    title="Wifi"
                    amount="-$67.99"
                    description1="Valerie. K    $23.99"
                    description2="Jean. D    $44.00"
                    />
                <Card
                    icon='../Party.png'
                    title="Party"
                    amount="-$33.54"
                    description1="Valerie. K    $18.54"
                    description2="Jean. D    $15.00"
                    />

            </div>
            <div>
                <PlusMenu/> 
            </div>
            
        </PageLayout>
    )
}

export default ExpensesDashboard; 