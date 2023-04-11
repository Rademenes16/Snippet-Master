import math

class GPS:
    def __init__(self, lat, lon):
        self.lat = lat
        self.lon = lon

    def get_distance(self, other_gps):
        """
        Calculate the distance between two GPS coordinates using the Haversine formula.
        """
        R = 6371  # Earth's radius in kilometers
        lat1, lon1 = math.radians(self.lat), math.radians(self.lon)
        lat2, lon2 = math.radians(other_gps.lat), math.radians(other_gps.lon)
        dlat = lat2 - lat1
        dlon = lon2 - lon1

        a = math.sin(dlat/2) ** 2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon/2) ** 2
        c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))

        distance = R * c
        return distance