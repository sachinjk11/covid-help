import React, { Component } from 'react';
import { StyleSheet, Button, ScrollView, Text, TextInput, View } from 'react-native';
import { SimpleSurvey } from 'react-native-simple-survey';
import { BannerAd } from './bannerAd';

const GREEN = 'rgba(141,196,63,1)';
const PURPLE = 'rgba(44, 130, 201, 1)';
const surveyold = [
    {
        questionType: 'Info',
        questionText: "This tool will help you assess your symptoms and determine if you're a good candidate for a coronavirus test in your home community.\n\nIt also offers guidance on when to seek medical care and what to do in the meantime.\n\nThis information is based on Centers for Disease Control and Prevention (CDC) guidelines."
    },
    {
        questionType: 'SelectionGroup',
        questionText: 'Have you been within 6 feet of a person with a lab-confirmed case of COVID-19 for at least 5 minutes, or had direct contact with their mucus or saliva, in the past 14 days?',
        questionId: 'contact1',
        questionSettings: {
            allowDeselect: false,
        },
        options: [ {
                optionText: 'Yes',
                value: 'Yes'
            },
            {
                optionText: 'No',
                value: 'No'
            } ]
    },
    {
        questionType: 'SelectionGroup',
        questionText: 'Does the person with COVID-19 live with you ?',
        questionId: 'contact2',
        questionSettings: {
            allowDeselect: false,
        },
        options: [ {
                optionText: 'Yes',
                value: 'Yes'
            },
            {
                optionText: 'No',
                value: 'No'
            } ]
    },
    {
        questionType: 'SelectionGroup',
        questionText: 'In the last 48 hours, have you had Fever of 100 F (37.8 C) or above, or possible fever symptoms like alternating chills and sweating ?',
        questionId: 'symptoms1',
        questionSettings: {
            allowDeselect: false,
        },
        options: [ {
                optionText: 'Yes',
                value: 'Yes'
            },
            {
                optionText: 'No',
                value: 'No'
            } ]
    },
    {
        questionType: 'SelectionGroup',
        questionText: 'In the last 48 hours, have you had Cough ?',
        questionId: 'symptoms2',
        questionSettings: {
            allowDeselect: false,
        },
        options: [ {
                optionText: 'Yes',
                value: 'Yes'
            },
            {
                optionText: 'No',
                value: 'No'
            } ]
    },
    {
        questionType: 'SelectionGroup',
        questionText: 'In the last 48 hours, have you had Trouble breathing, shortness of breath or severe wheezing ?',
        questionId: 'symptoms3',
        questionSettings: {
            allowDeselect: false,
        },
        options: [ {
                optionText: 'Yes',
                value: 'Yes'
            },
            {
                optionText: 'No',
                value: 'No'
            } ]
    },
    {
        questionType: 'SelectionGroup',
        questionText: 'In the last 48 hours, have you had Chills or repeated shaking with chills ?',
        questionId: 'symptoms4',
        questionSettings: {
            allowDeselect: false,
        },
        options: [ {
                optionText: 'Yes',
                value: 'Yes'
            },
            {
                optionText: 'No',
                value: 'No'
            } ]
    },
    {
        questionType: 'SelectionGroup',
        questionText: 'In the last 48 hours, have you had Muscle aches ?',
        questionId: 'symptoms5',
        questionSettings: {
            allowDeselect: false,
        },
        options: [ {
                optionText: 'Yes',
                value: 'Yes'
            },
            {
                optionText: 'No',
                value: 'No'
            } ]
    },
    {
        questionType: 'SelectionGroup',
        questionText: 'In the last 48 hours, have you had Sore throat ?',
        questionId: 'symptoms6',
        questionSettings: {
            allowDeselect: false,
        },
        options: [ {
                optionText: 'Yes',
                value: 'Yes'
            },
            {
                optionText: 'No',
                value: 'No'
            } ]
    },
    {
        questionType: 'SelectionGroup',
        questionText: 'In the last 48 hours, have you had Loss of smell or taste, or a change in taste ?',
        questionId: 'symptoms7',
        questionSettings: {
            allowDeselect: false,
        },
        options: [ {
                optionText: 'Yes',
                value: 'Yes'
            },
            {
                optionText: 'No',
                value: 'No'
            } ]
    },
    {
        questionType: 'SelectionGroup',
        questionText: 'In the last 48 hours, have you had Headache ?',
        questionId: 'symptoms8',
        questionSettings: {
            allowDeselect: false,
        },
        options: [ {
                optionText: 'Yes',
                value: 'Yes'
            },
            {
                optionText: 'No',
                value: 'No'
            } ]
    },
    {
        questionType: 'SelectionGroup',
        questionText: 'In the last 48 hours, have you had Nausea, vomiting or diarrhea ?',
        questionId: 'symptoms9',
        questionSettings: {
            allowDeselect: false,
        },
        options: [ {
                optionText: 'Yes',
                value: 'Yes'
            },
            {
                optionText: 'No',
                value: 'No'
            } ]
    },
    {
        questionType: 'SelectionGroup',
        questionText: 'Emergency : Do you Struggling to breathe or fighting for breath even while inactive or when resting ?',
        questionId: 'Emergency1',
        questionSettings: {
            allowDeselect: false,
        },
        options: [ {
                optionText: 'Yes',
                value: 'Yes'
            },
            {
                optionText: 'No',
                value: 'No'
            } ]
    },
    {
        questionType: 'SelectionGroup',
        questionText: 'Emergency : Do you Feeling about to collapse every time you stand or sit up ?',
        questionId: 'Emergency2',
        questionSettings: {
            allowDeselect: false,
        },
        options: [ {
                optionText: 'Yes',
                value: 'Yes'
            },
            {
                optionText: 'No',
                value: 'No'
            } ]
    }

]

class SurveyForm extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            answersSoFar: '',
            survey : surveyold
        }
    }

    onSurveyFinished(answers) {
 
        const infoQuestionsRemoved = [...answers];
        const answersAsObj = {};
        for (const elem of infoQuestionsRemoved) { answersAsObj[elem.questionId] = elem.value; }
        <SimpleSurvey/>
        this.props.navigation.navigate('Assessment Result', { surveyAnswers: answersAsObj });
    }

    onAnswerSubmitted(answer) {
        this.setState({ answersSoFar: JSON.stringify(this.surveyRef.getAnswers(), 2) });
    }

    renderNextButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    onPress={onPress}
                    disabled={!enabled}
                    title={'Next'}
                />
            </View>
        );
    }
    renderPreviousButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    onPress={onPress}
                    disabled={!enabled}
                    title={'Previous'}
                />
            </View>
        );
    }
    renderFinishedButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    title={'Finished'}
                    onPress={onPress}
                    disabled={!enabled}
                />
            </View>
        );
    }

    renderButton(data, index, isSelected, onPress) {
        return (
            <View
                key={`selection_button_view_${index}`}
                style={{ marginTop: 5, marginBottom: 5, justifyContent: 'flex-start' }}
            >
                <Button
                    title={data.optionText}
                    onPress={onPress}
                    color={isSelected ? GREEN : PURPLE}
                    style={isSelected ? { fontWeight: 'bold' } : {}} 
                    key={`button_${index}`}
                />
            </View>
        );
    }

    renderQuestionText(questionText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text numLines={1} style={styles.questionText}>{questionText}</Text>
            </View>
        );
    }

    renderInfoText(infoText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text style={styles.infoText}>{infoText}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.background}>
                    <View>
                        <BannerAd/>
                    </View>    
                    <View style={styles.container}>
                    <SimpleSurvey
                        ref={(s) => { this.surveyRef = s; }}
                        survey={this.state.survey}
                        renderSelector={this.renderButton.bind(this)}
                        containerStyle={styles.surveyContainer}
                        navButtonContainerStyle={{ flexDirection: 'row', justifyContent: 'space-around' }}
                        renderPrevious={this.renderPreviousButton.bind(this)}
                        renderNext={this.renderNextButton.bind(this)}
                        renderFinished={this.renderFinishedButton.bind(this)}
                        renderQuestionText={this.renderQuestionText}
                        onSurveyFinished={(answers) => this.onSurveyFinished(answers)}
                        onAnswerSubmitted={(answer) => this.onAnswerSubmitted(answer)}
                        
                        renderInfo={this.renderInfoText}
                    />
                    </View>

                <ScrollView style={styles.answersContainer}> 
                </ScrollView>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        maxHeight: '60%',
        justifyContent: 'center',
        elevation: 20,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'column'
    },
    answersContainer: {
        width: '90%',
        maxHeight: '20%',
        marginTop: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10,
    },
    surveyContainer: {
        width: 'auto',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignContent: 'center',
        padding: 5,
        flexGrow: 0,
    },
    selectionGroupContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        alignContent: 'flex-end',
    },
    background: {
        flex: 1,
        minHeight: 800,
        maxHeight: 800,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionText: {
        marginBottom: 20,
        fontSize: 15
    },
    infoText: {
        marginBottom: 20,
        fontSize: 15,
        marginLeft: 10
    },
});



export default (SurveyForm);