import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Thumbnail, H1, Text, List, Icon } from 'native-base';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
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

          <List>
            {routes.map((data, index) => (
              <DrawerItem
                key={index}
                icon={() => (
                  <Icon
                    name={data.icon}
                    style={{
                      color: routeAction === data.route ? '#fff' : '#333',
                    }}
                    type={data.typeIcon}
                  />
                )}
                label={() => (
                  <Text
                    style={{
                      color: routeAction === data.route ? '#fff' : '#333',
                    }}>
                    {data.name}
                  </Text>
                )}
                style={{
                  backgroundColor:
                    routeAction === data.route ? '#3f51b5' : '#fff',
                }}
                onPress={() => {
                  props.navigation.navigate(data.route);
                  setRouteAction(index);
                }}
              />
            ))}
          </List>
        </View>
      </DrawerContentScrollView>
      <List style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={() => <Icon name="exit-to-app" type="MaterialIcons" />}
          label="Sign Out"
          labelStyle={{ color: '#333' }}
        />
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
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: -3,
  },
});

export default DrawerContent;
