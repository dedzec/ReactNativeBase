import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import {
  Thumbnail,
  H1,
  Text,
  List,
  Icon,
  ListItem,
  Badge,
  Left,
  Right,
} from 'native-base';
import routes from './routes';

const DrawerContent = (props) => {
  const [routeAction, setRouteAction] = React.useState('');

  useEffect(() => {
    routerRoute();
  });

  const routerRoute = () => {
    const history = props.navigation.dangerouslyGetState();
    const route = history.history[history.history.length - 1];

    if (route.key) {
      const currentRoute = route.key.substr(0, route.key.indexOf('-'));
      setRouteAction(currentRoute);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Thumbnail
                source={{
                  uri: 'https://avatars3.githubusercontent.com/u/43690181',
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <H1 style={styles.title}>Lucas Leal</H1>
                <Text note numberOfLines={1} style={styles.caption}>
                  Programmer
                </Text>
              </View>
            </View>
          </View>

          <List style={styles.list}>
            {routes.map((data, index) => (
              <ListItem
                key={index}
                noBorder
                style={{
                  backgroundColor:
                    routeAction === data.route
                      ? props.headerTheme.backgroundBar
                      : '#fff',
                  borderRadius: 5,
                  paddingTop: 11,
                  marginTop: 4,
                  paddingBottom: 11,
                  marginBottom: 4,
                }}
                onPress={() => {
                  props.navigation.navigate(data.route);
                  setRouteAction(index);
                }}>
                <Left>
                  <Icon
                    name={data.icon}
                    style={{
                      color: routeAction === data.route ? '#fff' : '#333',
                      paddingLeft: 5,
                      fontSize: 26,
                      width: 30,
                    }}
                    type={data.typeIcon}
                  />
                  <Text
                    style={{
                      color: routeAction === data.route ? '#fff' : '#333',
                      fontSize: 16,
                      marginLeft: 20,
                    }}>
                    {data.name}
                  </Text>
                </Left>
                {data.types && (
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 75,
                        backgroundColor: data.bg,
                      }}>
                      <Text
                        style={styles.badgeText}>{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>
                )}
              </ListItem>
            ))}
          </List>
        </View>
      </DrawerContentScrollView>
      <List style={styles.bottomDrawerSection}>
        <ListItem
          noBorder
          style={{
            borderRadius: 5,
            paddingTop: 11,
            marginTop: 4,
            paddingBottom: 11,
            marginBottom: 4,
          }}
          onPress={() => {
            console.log('Logout');
          }}>
          <Left>
            <Icon
              name="exit-to-app"
              style={{
                color: '#333',
                paddingLeft: 5,
                fontSize: 26,
                width: 30,
              }}
              type="MaterialIcons"
            />
            <Text
              style={{
                color: '#333',
                fontSize: 16,
                marginLeft: 20,
              }}>
              Sign Out
            </Text>
          </Left>
        </ListItem>
      </List>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    marginTop: -5,
    paddingBottom: 10,
    marginBottom: 5,
    // backgroundColor: '#3f51b5',
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  list: {
    paddingRight: 10,
    marginLeft: -13,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
    paddingRight: 10,
    marginLeft: -13,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: -3,
  },
});

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(DrawerContent);
