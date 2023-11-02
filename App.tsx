/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { styles } from './styles';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="John Risser">
            <View><Text style={styles.labelText}>Role: Provider</Text></View>
            <View><Text style={styles.labelText}>Id: 24601</Text></View>
          </Section>
          <Section title="Select a date">
            <TouchableOpacity style={styles.btnSecondary}> 
              <Text style={styles.btnTextSecondary}>
                Request Changes
              </Text>
            </TouchableOpacity>
          </Section>
          <Section title="Find a time">
            <ScrollView
              horizontal={true}
            >
              <TouchableOpacity style={styles.box}>
                <Text style={styles.labelText}>12:00pm - 12:15pm</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box}>
                <Text style={styles.labelText}>12:15pm - 12:30pm</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box}>
                <Text style={styles.labelText}>12:30pm - 12:45pm</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box}>
                <Text style={styles.labelText}>12:45pm - 1:00pm</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box}>
                <Text style={styles.labelText}>1:00pm - 1:15pm</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box}>
                <Text style={styles.labelText}>1:15pm - 1:30pm</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box}>
                <Text style={styles.labelText}>1:30pm - 1:45pm</Text>
              </TouchableOpacity>
            </ScrollView>
          </Section>
          <Section title="Learn More">
            <TouchableOpacity style={styles.btn}> 
              <Text style={styles.btnText}>
                Request Changes
              </Text>
            </TouchableOpacity>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
