/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View style={{margin:10}}>
            <View style={styles.headerContent}>
              <View style={{
                  display:'flex',
                  flexDirection:'row'
                }}>
                {/* profile picture */}
                <View style={{marginRight:10}}>
                  <Image 
                  source={require('./assets/image.png')}
                  style={{height:60, width:60, borderRadius:30, backgroundColor:'#FFDD83',padding:20}}
                  />
                </View>
                {/* profile name */}
                <View>
                  <Text style={styles.subtitleColor}>Welcome back!</Text>
                  <Text style={styles.primaryTextColor}>Susan Doe</Text>
                </View>
              </View>
              <View>
                  <FontAwesome5 name={'bell'} size={24} style={{color:'#57419D'}} />
              </View>
            </View>
            <View style={styles.detailInfo}>
              <View>
                <Text style={{color:'whitesmoke', marginBottom:8, fontSize:16}}>Total Balance</Text>
                <Text style={{color:'white',marginBottom:8, fontSize:28, fontWeight:'bold'}}>$ 8,700,00</Text>
                <View style={styles.detailContent}>
                  <View style={{
                    justifyContent:'center',
                    alignItems:'center'
                  }}>
                    <View style={styles.iconDetail}>
                      <FontAwesome5 name={'plus'} size={24} style={{color:'white'}} />
                    </View>
                    <Text style={{color:'white'}}>Top Up</Text>
                  </View>
                  <View style={{
                    justifyContent:'center',
                    alignItems:'center'
                  }}>
                    <View style={styles.iconDetail}>
                      <FontAwesome5 name={'angle-double-right'} size={24} style={{color:'white'}} />
                    </View>
                    <Text style={{color:'white'}}>Mutation</Text>
                  </View>
                  <View style={{
                    justifyContent:'center',
                    alignItems:'center'
                  }}>
                    <View style={styles.iconDetail}>
                      <FontAwesome5 name={'exchange-alt'} size={24} style={{color:'white'}} />
                    </View>
                    <Text style={{color:'white'}}>Transfer</Text>
                  </View>
                  <View style={{
                    justifyContent:'center',
                    alignItems:'center'
                  }}>
                    <View style={styles.iconDetail}>
                      <FontAwesome5 name={'qrcode'} size={24} style={{color:'white'}} />
                    </View>
                    <Text style={{color:'white'}}>QR Pay</Text>
                  </View>
                </View>
              </View>
            </View> 
            <View>
              <View style={styles.menuOpt}>
                <View style={{
                  display:'flex',
                  flexDirection:'row',
                  justifyContent:'space-between',
                  alignItems:'center'
                }}>
                    <View>
                      <View style={{
                        display:"flex",
                        flexDirection:'row',
                        alignItems:'center'
                      }}>
                        <View style={styles.iconOpt}>
                          <FontAwesome5 name={'compress-alt'} size={24} style={{color:'#57419D'}} />
                        </View>
                        <View style={{
                          flexDirection:'column'
                        }}>
                          <Text style={{
                            color:'#57419D',
                            fontWeight:"700",
                            fontSize:18}}>In & Out</Text>
                          <Text style={{color:'gray'}}>Your Transaction History</Text>
                        </View>
                      </View>
                    </View>
                    <View>
                        <FontAwesome5 name={'chevron-right'} size={20} style={{color:'#57419D'}} />
                    </View>
                </View>
              </View>
              <View style={styles.menuOptActive}>
                <View style={{
                  display:'flex',
                  flexDirection:'row',
                  justifyContent:'space-between',
                  alignItems:'center'
                }}>
                    <View>
                      <View style={{
                        display:"flex",
                        flexDirection:'row',
                        alignItems:'center'
                      }}>
                        <View style={styles.iconOpt}>
                          <FontAwesome5 name={'signal'} size={24} style={{color:'#FFA3AB'}} />
                        </View>
                        <View style={{
                          flexDirection:'column'
                        }}>
                          <Text style={{
                            color:'white',
                            fontWeight:"700",
                            fontSize:18}}>Moneytory</Text>
                          <Text style={{color:'white'}}>Financial Diary for healthier flow</Text>
                        </View>
                      </View>
                    </View>
                    <View>
                        <FontAwesome5 name={'chevron-right'} size={20} style={{color:'white'}} />
                    </View>
                </View>
              </View>
              <View style={styles.menuOpt}>
                <View style={{
                  display:'flex',
                  flexDirection:'row',
                  justifyContent:'space-between',
                  alignItems:'center'
                }}>
                    <View>
                      <View style={{
                        display:"flex",
                        flexDirection:'row',
                        alignItems:'center'
                      }}>
                        <View style={styles.iconOpt}>
                          <FontAwesome5 name={'credit-card'} size={24} style={{color:'#57419D'}} />
                        </View>
                        <View style={{
                          flexDirection:'column'
                        }}>
                          <Text style={{
                            color:'#57419D',
                            fontWeight:"700",
                            fontSize:18}}>Card Center</Text>
                          <Text style={{color:'gray'}}>Control your debit card here</Text>
                        </View>
                      </View>
                    </View>
                    <View>
                        <FontAwesome5 name={'chevron-right'} size={20} style={{color:'#57419D'}} />
                    </View>
                </View>
              </View>
              <View style={styles.menuOpt}>
                <View style={{
                  display:'flex',
                  flexDirection:'row',
                  justifyContent:'space-between',
                  alignItems:'center'
                }}>
                    <View>
                      <View style={{
                        display:"flex",
                        flexDirection:'row',
                        alignItems:'center'
                      }}>
                        <View style={styles.iconOpt}>
                          <FontAwesome5 name={'award'} size={24} style={{color:'#57419D'}} />
                        </View>
                        <View style={{
                          flexDirection:'column'
                        }}>
                          <Text style={{
                            color:'#57419D',
                            fontWeight:"700",
                            fontSize:18}}>Awards</Text>
                          <Text style={{color:'gray'}}>Reward for achievement</Text>
                        </View>
                      </View>
                    </View>
                    <View>
                        <FontAwesome5 name={'chevron-right'} size={20} style={{color:'#57419D'}} />
                    </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  headerContent:{
    width:'100%',
    paddingHorizontal:12,
    paddingVertical:18,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:12
  },
  detailInfo:{
    width:'100%',
    marginBottom:12,
    backgroundColor:'#57419D',
    borderRadius:20,
    padding:24
  },
  detailContent:{
    width:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:12
  },
  iconDetail:{
    backgroundColor:"#897ABA",
    borderRadius:10,
    height:50,
    width:50,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:4,
    elevation:10
  },
  iconOpt:{
    backgroundColor:'white',
    height:40,
    width:40,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    marginRight:12
  },
  menuOpt:{
    backgroundColor:"#F2F2FA",
    width:'100%',
    paddingHorizontal:14,
    paddingVertical:20,
    borderRadius:20,
    marginBottom:14
  },
  menuOptActive:{
    backgroundColor:"#FFA3AB",
    width:'100%',
    paddingHorizontal:14,
    paddingVertical:20,
    borderRadius:20,
    marginBottom:14,
  },
  primaryTextColor:{
    color:'#57419D',
    fontSize:24,
    fontWeight:"bold"
  },
  subtitleColor:{
    color:'#D2CDE2',
    fontSize:16
  }
});

export default App;
