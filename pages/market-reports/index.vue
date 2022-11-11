<template>
  <Loader v-if="isLoading" />
  <div v-else class="d-flex mx-12 flex-col">
    <div v-if="isMajorCity" class="d-flex">
      <div class="d-flex flex-wrap gap-4">
        <LargeButton
          v-for="category in categories"
          :key="category"
          :is-selected="category === selectedCategory"
          :label="category"
          @on-category-click="handleCategorySelection"
        />
        <SearchInput />
      </div>
    </div>
    <div class="d-flex mt-4">
      <component
        :is="`${cityToLoad}-map`"
        v-if="selectedCategory === 'City'"
        class="mx-auto mr-48 mb-auto"
        is-city
      />
      <AreaList
        v-if="selectedCategory === 'Areas'"
        :areas="structure.areas"
        :city="cityToLoad"
        :selected-place="selectedPlace"
        @onAreaClick="handleAreaSelection"
      />
      <CommunityList
        v-if="selectedCategory === 'Communities'"
        :areas="structure.areas"
        :selected-area="selectedArea"
        :selected-community="selectedCommunity"
        @onAreaClick="handleAreaSelection"
        @onCommunityClick="handleCommunitySelection"
      />
      <RegionList
        v-if="selectedCategory === 'Regions'"
        :regions="structure.regions"
        :selected-region="selectedRegion"
        :selected-region-area="selectedRegionArea"
        @onRegionClick="handleRegionSelection"
        @onRegionAreaClick="handleRegionAreaSelection"
      />
    </div>

    <portal to="reportSelection">
      <SelectionCard
        :full-report-path="`/market-reports/${cityToLoad}/report/${formatReportTo(
          selectedPlace,
        )}`"
        :has-full-report="isMajorCity"
        :social-report-path="`market-reports/${cityToLoad}/social/${encodeURIComponent(
          selectedPlace,
        )}`"
        :selected-property="selectedPlace"
      />
    </portal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import isCityMixin from '~/mixins/isCityMixin';

import AreaList from '~/components/organisms/AreaList';
import CalgaryMap from '~/components/atoms/maps/CalgaryMap';
import CommunityList from '~/components/organisms/CommunityList';
import EdmontonMap from '~/components/atoms/maps/EdmontonMap';
import FraserValleyMap from '~/components/atoms/maps/FraserValleyMap';
import LargeButton from '~/components/atoms/LargeButton';
import Loader from '~/components/atoms/Loader';
import RegionList from '~/components/organisms/RegionList';
import RolesMixin from '~/mixins/auth';
import SearchInput from '~/components/atoms/SearchInput';
import SelectionCard from '~/components/organisms/SelectionCard';
import VancouverMap from '~/components/atoms/maps/VancouverMap';
import VictoriaMap from '~/components/atoms/maps/VictoriaMap';
import WinnipegMap from '~/components/atoms/maps/WinnipegMap';

export default {
  components: {
    AreaList,
    CalgaryMap,
    CommunityList,
    EdmontonMap,
    FraserValleyMap,
    LargeButton,
    Loader,
    RegionList,
    SearchInput,
    SelectionCard,
    VancouverMap,
    VictoriaMap,
    WinnipegMap,
  },

  mixins: [RolesMixin, isCityMixin],

  data() {
    return {
      selectedCategory: 'City',
      selectedArea: '',
      selectedCommunity: '',
      selectedRegion: '',
      selectedRegionArea: '',
      selectedPlace: '',
    };
  },
  computed: {
    ...mapGetters({
      cities: 'config/citiesArray',
      selectedCity: 'reports/selectedCity',
      isLoading: 'reports/isStructureLoading',
    }),

    cityToLoad() {
      if (this.selectedCity === 'City of Calgary') {
        return 'calgary';
      }

      if (this.selectedCity === 'Fraser Valley') {
        return 'fraser-valley';
      }

      return this.selectedCity.toLowerCase();
    },

    isMajorCity() {
      return this.cityToLoad === 'calgary' || this.cityToLoad === 'edmonton';
    },

    categories() {
      return ['City', 'Areas', 'Communities', 'Regions'];
    },

    structure() {
      return this.$store.state.reports[this.cityToLoad].structure;
    },
  },
  watch: {
    selectedCategory(newCategory) {
      if (newCategory === 'City') {
        this.selectedPlace = this.selectedCity;
      }
    },

    selectedCity(newCity) {
      if (this.isMajorCity) {
        this.$store.dispatch('reports/loadStructure', {
          city: this.cityToLoad,
        });
      }
      this.selectedCategory = 'City';
      this.selectedPlace = newCity;
    },
  },
  created() {
    this.selectedPlace = this.selectedCity;

    if (this.isMajorCity) {
      this.$store.dispatch('reports/loadStructure', { city: this.cityToLoad });
    }
  },
  methods: {
    handleSelection(key, value) {
      this[key] = value;
      this.selectedPlace = value;
    },

    handleCategorySelection(category) {
      this.selectedCategory = category;
    },

    handleAreaSelection(area) {
      this.selectedArea = area;
      this.selectedPlace = area;
    },

    handleCommunitySelection(community) {
      this.selectedCommunity = community;
      this.selectedPlace = community;
    },

    handleRegionSelection(region) {
      this.selectedRegion = region;
      this.selectedPlace = region;
    },

    handleRegionAreaSelection(area) {
      this.selectedRegionArea = area;
      this.selectedPlace = area;
    },

    formatReportTo(title) {
      let formattedTitle =
        title.toLowerCase() === 'calgary' ? 'City of Calgary' : title;

      return formattedTitle.replace('/', '%2F');
    },
  },
};
</script>
