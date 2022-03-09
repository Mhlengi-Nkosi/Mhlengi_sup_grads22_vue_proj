<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-lists')" :mode="storedThingButtonMode">Stored Lists</base-button>
    <base-button @click="setSelectedTab('add-thing')" :mode="addThingButtonMode"> Add to List</base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import ThingList from './components/ThingList';
import AddThing from "./Layout/AddThings.vue";

export default {
  components: {
    ThingList,
    AddThing,
  },
  data() {
    return {
      selectedTab: "stored-lists",
      storedLists: thingList
    };
  },
  provide(){
      return{
          thingList: this.storedLists,
          addThing: this.addThing,
          deleteThing: this.removeThing
      };
  },
  computed: {
      storedThingButtonMode(){
          return this.selectedTab === 'stored-lists' ? null : 'flat';
      },
      addThingButtonMode(){
          return this.selectedTab === 'add-thing' ? null : 'flat';
      },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addThing(name, keywords){
        const newThing = {
            id: new Date().toISOString(),
            name: name,
            keywords: keywords
        };
        this.storedLists.unshift(newThing);
        this.selectedTab = 'stored-lists';
    },
    removeThing(ThingId){
        const thingIndex = this.storedLists.findIndex(thing => thing.id === ThingId);
        this.storedLists.splice(thingIndex, 1);
    },
  },
};
</script>
